import requests


def get_recommended_songs(query):
    url = f"https://api.deezer.com/search?q={query}"

    response = requests.get(url)

    data = response.json()

    songs = []

    for track in data.get("data", [])[:5]:
        songs.append({
            "title": track["title"],
            "artist": track["artist"]["name"],
            "album": track["album"]["title"],
            "image": track["album"]["cover_big"],
            "preview": track["preview"],
            "link": track["link"]
        })

    return songs