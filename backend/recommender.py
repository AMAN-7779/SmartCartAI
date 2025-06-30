

# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity

# def get_recommendations(cart_ids):
#     df = pd.read_csv("products.csv")
#     tfidf = TfidfVectorizer()
#     df['combined'] = df['title'] + ' ' + df['category']
#     tfidf_matrix = tfidf.fit_transform(df['combined'])

#     cart_vectors = tfidf_matrix[cart_ids]
#     sim_scores = cosine_similarity(cart_vectors, tfidf_matrix)
#     avg_scores = sim_scores.mean(axis=0)
    
#     recommended = []
#     for idx in avg_scores.argsort()[::-1]:
#         if idx not in cart_ids:
#             recommended.append({
#                 "id": int(df.iloc[idx].id),
#                 "title": df.iloc[idx].title,
#                 "score": float(avg_scores[idx])
#             })
#         if len(recommended) >= 5:
#             break

#     return recommended


# backend/recommender.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def get_recommendations(cart_ids):
    df = pd.read_csv("products.csv")
    df['combined'] = df['title'].fillna('') + ' ' + df['category'].fillna('')

    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform(df['combined'])

    if not cart_ids:
        return []

    # Filter out invalid cart IDs (e.g., > len(df))
    valid_cart_ids = [i for i in cart_ids if 0 <= i < len(df)]
    if not valid_cart_ids:
        return [{"id": -1, "title": "Invalid product(s) in cart", "score": 0.0}]

    cart_vectors = tfidf_matrix[valid_cart_ids]
    sim_scores = cosine_similarity(cart_vectors, tfidf_matrix)
    avg_scores = sim_scores.mean(axis=0)

    recommended = []
    for idx in avg_scores.argsort()[::-1]:
        if idx not in valid_cart_ids:
            recommended.append({
                "id": int(df.iloc[idx]["id"]),
                "title": df.iloc[idx]["title"],
                "score": float(avg_scores[idx])
            })
        if len(recommended) >= 5:
            break

    return recommended
