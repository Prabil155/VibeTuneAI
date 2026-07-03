import requests


def get_recommended_songs(ai_songs):
    songs = []

    for song in ai_songs:

        query = f'{song["title"]} {song["artist"]}'

        response = requests.get(
            "https://api.deezer.com/search",
            params={"q": query}
        )

        data = response.json()

        if data.get("data"):

            track = data["data"][0]

            songs.append({
                "title": track["title"],
                "artist": track["artist"]["name"],
                "album": track["album"]["title"],
                "image": track["album"]["cover_big"],
                "preview": track["preview"],
                "link": track["link"]
            })

    return songs