<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2 class="mb-4">
                    Streams
                </h2>
                <div class="h4 font-weight-light">
                    Aliquam fringilla nisl id viverra luctus. Donec nulla ipsum, aliquam eget condimentum at, lobortis
                    eu nibh. Donec sollicitudin libero in mauris pharetra ultrices. Integer vitae arcu nec sapien
                    condimentum iaculis.
                </div>
            </div>
            <div
                v-for="stream in streams"
                :key="stream.id"
                class="col-12 col-md-6 col-lg-4">
                <c-stream-item
                    :streamName="stream.userName"
                    :streamAvatar="stream.userAvatar"
                    :streamImg="stream.previews"
                    :streamLink="stream.link"
                    :streamId="stream.id"
                    :streamViews="stream.views" />
            </div>
            <div class="col-12 mt-5">
                <c-stream-carousel
                    title="HOT streams"
                    :showBackground="false"
                    :streams="streams" />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Streams | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub streams` },
                { hid: 'keywords', name: 'keywords', content: 'streams, twitch, youtube, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-stream-item': () => import('~/components/stream').then(m => m.default || m),
        'c-stream-carousel': () => import('~/components/stream/carousel').then(m => m.default || m)
    },
    data() {
        return {
            streams: [
                {
                    'id': 1,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 2,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://i.ytimg.com/vi/9LpiYnkuqMw/maxresdefault.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 3,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUVGBoaGBgXGBgWHhcYHhgXGhoYFxgYHSggGBolHRoXIjEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQGy0lHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABCEAABAwIDBQUECAQEBwEAAAABAgMRACEEEjEFBkFRYRMicYGRMqGx0QcUI0JSweHwYnKS8RUzU4IWJEOTorLSVP/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAnEQACAgICAQQCAgMAAAAAAAAAAQIRAyESMQQTIkFhBVFxkYGx0f/aAAwDAQACEQMRAD8ApstoKSVlQXPImRHG3OrAwzGkrtxg3vYRFrfCtMhFVtsbXYwqM+IcCQfZGqlnklIufHQcSKNCAROCZJAzqHUp6X1FU28OZ0PpVLFfSsAfscISOBcXE/7Egx/UaTP0tqKpewYgmSW3IN9SEqTB8JFY1B/D4fpRTD4fpUu7m8eGxqSWHJUBKm1DKtPUp4jqCR1ox2dMhWgYMP0p31bpRIM0uxp7EBn1SkMNRXs6XZ0yYGDRhaeMJ0ogGqmQ1TABf1PpS+p9KMhil9Xoigb6nXhwfSjX1el2FYxkd58PGFdOlhf/AHCsY22nMxlMEkBYzlXe7QgSDpKYt0rrmIwCFpKVpCknUHQ1STu7hgQQwiQZBjQjQ0rjYUzl7DRCRKrKkg3+7r4VZwjRzKMzKAQL6FaNeVdJG72H07BFtLaTrXqdg4caMo0jThYx7hSSxXdFvXdJP4MVhW0lbOUDMVDMApJi6YnKowTe1ogiLSdV9Uq41sRlJCktJBBkHkaulijhx8E0xMk+bApwlefVKMlimFirEQUMJThhKKJYp4ZrMKBX1Sl9U6UQxLzbYlxaU/zED41KhIIBEEG4PMUtoIKOFoTj9rsN2zZjyRf1OgofvljFl4tpUcqQBE2JiSTz1HpWdDR41zZM9OkdMMNq2X8bvE4qyAED1PrRHd3GgNLcfd1VAzq5ATAN+PCsaFLUpY7VpASogBZCSf0qRTCge7icMdfvCbEgWubwD51BZ2nbLPEqo2GL3lbFm0KV1V3B5Tc+lZ7aGMW8rMuLCABYAa+JoXiVOIuXmDrZJzGwJ4DjEeMaU5KiYCcVhs18wzARAJkH71hyHChPK2thhiUeict1C8mk2538rmKZSmAc6UrdBngAge0ORI8apYvGALCUvJUCQMykdmIPEybfu9BKxnRMs86ZUF1CTiMONQJWEkwSNNQIEz1HOqwxxSSnuKg+0kyDYGx4607i1sEY8nSOubZ2ujCsLfcEhIsnTOs+ygHqePAAnhXLcLgndordxDzgKggq4gBKZ7iBwA4D5zRr6YMWf+WZBsStwjmRCU+nf9ayWxsb2QV3lDMIOWLi9jPDS3Smnycfa6ZGNfJac2OACZjLqTe3prUCsOySqCcqUglVz0iI5kUYwmFGZSXZJeJggRIy9NDc0x9jDobWG1ypSdCbzqLc54Uw1ABaV4dTeIYdIUkylaZSQRrY8OnEE13LcneAY/CpeEBaTkdSOCwJkT91QuOVxwriu0EEYZAUI7ytbc/nWk+gzGlOMeZ+64yVEfxIUCD/AEqX60YsSSOwrUReCeg/Wo28YkmDKTyUI9OB8qftLaLbAHaEyr2UgST4AVlXtpuvPlCHEhJHdQ6AjNySNTPnPhWlKugRRrppEViWtsYlDpw7pyLOhWoHKIkd7TQamj2yMcggKHbrkXUQopnjHPxApVl2HgGUOVO24KqPKSACVABRAB4EnS9IoIqymTcQo2QalCKENPlNXMNjOdOpCOJc7Ol2VPbWDpUlNYtEHZ15kqxXkVrNRBkrzs6nKabWs1EfZ14W6lr2K1moh7Om9lViKjCxJHEcKNgojDdOKKcongn3xWb33xSk4cfdzKGijOWCSDYdKWU6VjRhboxW8eKLz61g2mE/yiw9dfOr7282IKQhBDaQAO6JNhHtK/ICg2EcC7puJ1/vVzJXnPI03R3+mqplVaSSVKMk3JJknqSaanKdDPUVPimM6Sk8aZh8KEJCRoKTkPQkspiconwFMUwL2HoKspEV4QeFG0G2UiwPwj3VWbwKASqLkzz91Ew3SKY+Va0DZUWyB90egFDMYyCTKRr8KLFu/wCVDXlSOtMjNsDYxAmABUGSrL3tVGRRHjdBH6VCVKwznABaPAghQ/8AY+lBGWUKAkxOpAn3Vt9r7PTimFNSM0hSD+FYmJ5AgkHx6VzQvuMqLbiSlSTBSdQarF2jlao32xMKo4kDJLZIMlIMEpAkE6XFSb27JZYeSMOWnJGYqzE5SCABCZA86xbe8K0pKErKQqJA4wZFVf8AERrNBJ2H4os7efVOUnrHInWJ4VovoSYP11xz7rbKpPVSkpA9Mx/2msO86VqgAkkwABcngAOddX3HwiMGxkUYfcIU7b2YslE9JPmo0zdAqzpSkoLgd+8E5RyAmSR1NVtuYVL7XZkgSpMmATlBvEixihycXanuYwwSkgmhyBxMvtVhtWOQyoqCEhDaVK7x0kEz7QlURyrZYXFBbFzdslJDRyhShYAEaTa1oJrMbwuZg04tPsLm2unXqE1d2Lt1K1KBBCiJJsJi14OtKpILiyXauDWhuXX0NoUR3SFrg62NzPWgatvrRlBWpRRZOWyTfjfvUd260h5sqUs/ZpUpIBETE39KwbKwRMUYwVmbZpkb6r+80nyJqVnfRInM2oyZFx3RAsOd5N+dZZp5uYVPiOH5GljGUzlkEHykU3JXVgrRuMJv6wNQseQNaPZu2e0ALZzoPGwKYix56/3rhcHtMkKjNBI4Cda2mw8UppvuqVJJNlQPuzrYCmWQWWM6ql89Kjwm0UuFQAIUgwoERGsHqDFYL/id1NwCR/FlI8AU1Pgt7O/JaAKjcienDjR9VMHps3/aVGjEIUYCgSNYIMeMVkn95oUAiFTGgA+J1onhNrFRMgC9tOQ1g0VkTBwDL2JQgStQSOaiAPU1mNsb7YdBT2SlOlKiSECxGRYjMbG5B8qzm3NnpXiFEkqBNgpSlAW4ZiarYpxDLanMshMWEayBrSubGjjXyWMdv1jFQhtCGtBmIzKNvajQelVXsfiMo7XFOHUqOaANIJAsKbiSA+Z4I5+FQ45CVMuqTAV7IvzKf35VJykyqikGNibaeLqAcWVN3KiVAiACdT4RRbfV7MptAuAkn1t8BWG2X3GDMTIHPr+dEzjlKutRUqIk/Cg5e2jKNys9aaCbAR4U+Kh+tck1GX1TpUKZa0WaVQd4jX9+VRKSeJ+NbiayypYFedqKhS1TggVqMIvDkfhTHHDwqSB099eFfWjQCs+sxrQlxw9KLYtcJtP786Fur40yMDVCTXmSpJr2KxRKi0naSkLzAg9RoodRV3a+FYxwQC2ouEABxEApkhISomyhJAg89RNAlYwZioJSROnA0c2Gy46CrDrCO82C3KiFSuQSLjIkgEza/WCs+UVaOe0wC59G+Kk9kptaRFycsyop6jUG81VG42IC8ji2kHNlMKKiDxskR766A09jIUe1ZF5VKVAg9qoGxRwXPiDxoE5tN1LriXMpWHFBRGmYKIJHSZ4UMeTK37q/wakX9g7pM4cSk5nf9RSRb+RIPc8bnrVhjFDtICgTf2uI5d6h7m33OAT6Gq2MxSlXObMb308AOA86o77MaxnHp9kAwLc9PlVs4oRYSax+FxZWTNgLxMX43/KibeJt++HlWW+zPRYxwK9VGDfKbi3IVVbZy3SaecSDpBppc5+lJJUykdxJFOOQU5rEEHTTjQ93C+HkI+FXS5a9RKV+/wBiipfYWkBcUVAgAazPHyqBJVlUeKdATwtInzq+/wC0TQ1njyOnHWtISibDgGCSoKkEDNEmZgzYz61Kt5ehkCLiY8aiANjF+HSqeJWpSswJvA8dNP3xo7BRbGJyKHZk5TYyRB8hp41Ng3z3pBWSqwm0yZPWKoKPCL8/OxqxsxUSYBg+4zPn8qFGNCwpSYIGltBqb/vwp2GxjyFE5p6Hy5VGy5wqTPzFNdDUiDFbekoJWArP34B9m8i/CoF4wONrQokhSyoHpMgCdBamfVMOkSskqMyB4npVfKB7OnCqp2SaomxOKK1FRtNRdoYiabSpqFHqdJEcJmpGsWpIgVBXsVqQbZfZxvA6zVqbfIUGorhlGLzUppIpF2TC/OpIqMq8adn5ip2UQiOlKKYtR4Co1LPKsYlJpnadaYTUflWMNxzmgB586E4hdXcU7c20oSpUmiGI+vaYDXuasOSf8K4uQZwturvyqVndvHJSpAcw+VUSMzwBIMpJAFyDpWtDkiRcCvF4juqI1AJHpXvvwcJ8bH8t5DdOv6MDiF4lkx2yCSYORb1yg2JkiYOh9ONRsvuHUIKiZvmknjJKr1p91H2lLLriZ7JCW5iRJUslQ8Rz61uFYXBABRaRmcFjkKrcbRavGycIypI+mwxnKFt7MHsjZjzyM6SxYwQe1BBHAyKvubDxBBlTMniCv5VDsbHJZxL7JUENpUrLJiTngXOpi3lWjcer1cHiYMsFKn/Z895n5DysGVwTVfwZfBbNdScysoKbmygNOov+leJx+dJUmLa2I4xRXbeIysuH+Ej1t+dZkMBOHSoGM5MyYm6vzFcnl4IYa4npfjfKyeQpOYUwz5JuDBq2qQNT6msng3QHmVApvIMGdQRWtJsK8+fZ60Oim0F9qqT3SlMXOsqB92WljVd3U1K7iUI9paUzzPDnrVLaOJBScsk9ATy5VkjNkRvUJQAExGoqm44VJIBg+Y95FMw7ToEGCZ0kT401C2FsovUamkykxoY936Uk4dzpTH8A4RAKfWhQSYtp5CosPlBXEXP5DT301vZjmWFLHvpYfZKkzKx5SfjWQCXDmVjxFG3mJjXUE+V/fagrOGyKBzTJHCtBNqSTodGcxaYcVa0mn1Ji0KKzYASevuEmoWsRe40mBfXhPMVaMqItWe0qI4NgLTJSB/c9am+oo4g+Rj4zR9WJvTYJAr00SVhW7wlfTvj/AOapuM8vnRWSLM4MhFXUYlIi/wCVCNoKIQoA3KTHjpTQoqMA2pJtMaKoNnEp/EJ9Pzp4eSeIPnQQYYkSIIpqQpPtCRx6VOh7DhXymmFzqKG4dyPWamOJmjRrLhVNL98KpJxPhTlvm+lYBA+rXrVMwadinKgQqiUj0ShIpZBTQqvc1YY17K8pCFJJMlQKQSLmddOMVLjnEISVq7oFzb3RzoQ1jsSFhBwziieUDhwIBA8zQjeTbRcXkAhKTcSDKhYyeIF4r3Xm4Js+OXiSyzS+P3Zf3DxSQ66hQ7qwCAehPzrdYPENhJKo7skSNLnSuSbJx3ZuhZEg2PgeVbJ3bLQaWS52hAICdTcQLfma8bJBuVo+oxZFGNMxp2hmxBdImXCuD1UVCfWuj7J2mh5E5ZHGBoesVzMQRcacaJbDfeZWciVLSRfLMdCY0P6134ZOH8Hk+bhWaN/K/Zsdv4JDrSktOEK1gjUi8dPGguHZWcElWRcJEzkMRmMmYiK9e2g6oEKw5IOtl3Br1e3Hfqv1VCciQFNm0mJIIBVbpUfMk500P+Mj6alGRnHnYyG/dcnQDj0rWJXIrIq2UTPenzn4TRvC42BCpBjjauOaPVgzzaevlVF4JCVGIJ4j8692yjtMqkOFJTItxnnz099DMmJ0lKpAudfSgl9jN/RMV6yTf86vbOWc8ATI4XqPB7AdWJdJaB0K5Tboj2z5CtkjeNDTSEFKXHEJhSyMoUQIkJF7+VaX0BfYFS4rQJJPQGq+0VutZSpEAmDKgCPFPtDxIirn+KOOHKgQVmAEQ2CeWbVXgTV1zYKkJCn3ENzYBJlUnS508jQX2YGJfniB414cSkauIHnV/Abvsk3nkfaPkSK2WxNy8KoT2LRHPKo+80JtR7NG2c3dxiZRCgZII8KKsYmTlSkqJ0A1PzrpR3Hwk+wR0FhVjD7pMN3bSAeSgFjzSfyipvJCtD8WYXDbn9oCpbnZq1KVEgj/AGFIIFCNnbHTiFrGHC3Qn/qJBCFcO6o6npXT9pMLSggoUQNAmHUE/wAq7o58hGtRpeLTYUhRCALZf+Yb9LLHkYFBZWkF40znOJbOHSsFJBRbLxkxA9SKpYLEkNqledSDc8bgG86QSRflRTaGPbfdcUogFS80G1xERPUVSxDffJEZVIg+ImPiaN2HSVHhctVd1YpjTQQIHvM1A65TkyntBf5fH9K8aMSehPuqLELlR8qkSdfIepApwBNuBA6Ae6nKINikVF2wAvempcSrRUH98KBhyAg8IgnQ0jh0fiVT2rgEwZHG9Ru6pgWm/of0rWZI8OBH46ccKeCga9JqsnFw4pOphJnxzWo2YZidnuHQA9ZqucC6PuH1FFRiutMxGINjNhJMeGn75VrDbQJUlQ1BHjXmevcdi4yyJJk+VtedoqBD8iSIngOFEZSNYdsuqCkpjQn8NwD9+QUgeNyKxzbDi1ZUDMTyg+/l1rQ7Z2/s9eEyNEdvLWjakpMNtBckpkDMHLTBJ0MyM0MQgd7OSs8EhVupJGvQV2ZMnJnm4cHpxpE2Dw6lkpSkqKQVEDkIBgcYn3VK4yrKTkVAmTBgQYMnoYHnVndLaSGXlOLzQUEDuqMkkch0q2vaKfqbjSUrLrir9xXs9pITMRAToOtS5fZfiZ8qolsXaS2lgpURwPh+dDRgnTo05/Sr5Vot12w0QpzDuZxoS2tXmABbxpo5OLtMWeJTi4tBpW1HP9VX/iPWr+yt2FOtpdEErKlEnWStWtC9utqcIcYadzH2k9i4J6glMTW/3NZWnCshxJSrLdKhBBkm44a0vmeRcVTI+B43pydqgU3uc5+JPlerL25iUpzLc4XhM1smtOVZje7Z6yCsvwkn2VkJE8AI1OtjXAs0pOrPT4RSujA7dQ2mEovCp0AmxESCYoLhNsKQkFLakFSYsTIvEFXyA1ontTFobgKIE8Tw5GOVV2FAJGZNh5yOAHOrtJE09DNmbOexJ7ikCDclQkdSPaNarDbp4NlGbEvKdJsADkSCeQTcnxJrObNcSkCDl66W6nhbWquM2ip1bcWQFqAUSMxV3TITqExxPE0LbDpBbF7WhjEYRRzIR/lExmAIlItyI1oVjcS+pzCuLgNqKYV7RKwkkFQUI0zQLjWavEtsLdS6cxUkRNyq6uHE391Z5GJxE4UqENIMJIN8wBkmdDYx4UUgWfR+HwTcheQZiBKiAFH+aNTVyQNBUGBcCm0KEwpKTe5uBqedSqVXC2XHzSJqJT0fv4UzMT0HvrWGiRbg86DP4fDuuKSl1IdF1BtaQvl9oka6j2hRYJ5Vy7e/c3FYfEu7T2e5K82dTKUd4DKO0KbkOSQSUwNTEmKaCUnVmei7t/6OC6lZQ6CpcnvJ4kzwrlmDSWXHG2nSUBRTwIJFiRwN5vxrru5v0hs41PYvEM4giBJhKzp3CdFfwm/Ka4e8y4wtTLgKVtqKVA8wY9DqOhrog5U0yM600acOkj2p6kD8ooJtjaLra8pT3SAUnSR/eR5VRXtRcFIIHWaSsjsFRVAHFRMc4nSqQi49k27C+x2S+grUCm8C+scfWra9mLHsrnorp1ofsLEqQD2aFKR/EoAH+WTajGA2iVkpcbycjIIPQwdaonEGyq2pwKAWnjqP0q0/ETYwONPxrCyO4R8ZoW66tNlotoYvQa/QU/2EWykgFCiBwg29DTFqXnsUmBoRH71qiy6D7Krcjf8AWrjS9dJqbHR6cQvTs7mwymauL2FilXODdB/kUD6gVQdXFU/qwiFISrXgOJnQ0yoBocHupjXVpSnDPJkxmUDkHVSiLCiG0twse0ypxxtBQlKlKhwSAm+h6C1Btj7dxTKUsYd9xpEmEJISJUbwCOJNGsDvLtTDpbSH1KQhWcB1SVFYn2VLV3ykzztaIo6Bs59icLiF/adg8ER7ZbWEgXnvEQOXlT1qyhOhkTYzFyIPI2nwIrom1N59r4pp9sobUziB2ZTlSkNiACW1ZwTOYGVFXCIvXNEoJnWxItceorP6Ct9hfZrCMiT/AISp1XZJV2naHKRkR3glKMsnKTBky4elXUNJCW0K2YEOOpbCXC5lAUAmVBJSAhRgkpJvIBmavJXgkHI0jEIGUExiHjFkgAoQQBYC5Md0VBh8Ew6olH1j7PvZ1PKgGZGXKpUKtPtculDlHvYnBmnO0MOpaj/hLJklV1tAqzOJInuaypCTBN3MtwLNwe9eGAOTZ7aJCwYKbyoKTIyXAjT0gUN3b2aV4httwvjtNUqfXOhJhaVaxMBVdDb+j/BDRLn/AHFUks8U6KLE6sz+F3gw/wB3BNgXH3TIzpUJ7l7Jj+5rzF7YYbKMR2QQGgJSIhahN5AFzI4fdFaYbmYVJslf9ZrDfSzs1DKcO22lWVallXekkpCQkSdPaV6Uiy8nQ3p0rIMDvoMRjGjmU00ErBQspgqJUpJJSAAAISPDUkknbYLbzKyA2vOdO4CoTyCgMp9a5VubsXDPOraxKilSk/ZjMAJnXSCrlNta6jhdgLS4XGMRlmxStAUABokQRlHQRQzNFMMVLt0N2lvQtpwNBrKpQsVqQAddTMJ9T4VkN/doYhbzPa5kNgDKCAAVnOZ1JUnugEmLaddrtDddx8faONTrmS2uZ6faR7qzP0lbvBnAoXnWtSHkSVGwSUqTZI6kayb61LG/cjpyemsVLsxuPwjSkhTbJV2kkQR3SLKBJMATp4GrmzX05chgFOokGJvc9PyoF2qloKgVEEEwok3HHLpIjrRzYaULTBSCryHHhGnCwrql0cC7LWEWhYkQRPum3uoVtfGozBlCSQhZzKAOVByK7ubTMZ06UUTspKnTBIhIsDAuTeOdtaH7V2e0ymAYOdJSJjMTYgjjYk+VBVZmTow4S8O3glaVd49ACBfkAfWg61uZUBIHZIfWCr7wkkpHRNx5xRLFGVM9qISFJAkyMpSoTJ4yQaEY3tPtMh+zS8lShee8E5T14etPEVn0fs9f2LZVI7iT3jeYGvWpcxOlhzP5Chu7w/5Zkq9rs0/ezQYE3JMnrROvPfZ1paEEAePOvSaQr3xrGPE1Vxe1WWnG2nHEpceJDaSbqI1j3Vd61m9+tnJXhnHg3mfw6FLZWDlW2pIzSkxzSO7xiKMVb2Bs5n9MezMM1imls5UOvBwuhJEZklvKpSB7KlZjJ4xNZzDbWYeIb2klZKQEpxDZ+1QOGabPo8ZULweFFd4PrW08KxiexaLrXahZbgKdSSgJUUxqMihE3EEaxWFfJUAk8NOnTwrthTVX0c87TutMvb17D+rO/Zr7bDrAU0+kd1YIuJEgKBkEa20oQ4s5QOHH9aXeCcsmJmJtOkxzpif38quiToMNY4hIAtNqI4fGgDoKB4JDZQ4VvpQU+wgoWorPLMkQkdSfKkpyUyKjLH8DJhHGbdUPZMVUTvG9NylQ5FP5i9CXTTKtGKSFbNtsRLeMJSE5HQJieHNJ1NaDZm7raTJc7Q65SYHmAZ99c62E6UvskT/mJFiQYKgCJFxYmuzDONFBY/C4L+AcF/UKqGaTWi+GKZSxezcOQCUZOHck38P71Q/4bBEtOJX0JhXn18qNqxTaZC0FqdcwlHjnFgP5oqFWCETOZJ0IhQ8Z1FSUmUcEZrFbPW37TagfOPUVU2RgUPLDanCkgWgFRUq02Ggv7q2KH1JsFEjkrvj33FTYZxKSSlASo6lEX8Qbmm5i8AXhtyGyoF1xahxSJTOupkmL8IrTt7FYQkJbbASBoJAHvqsccbQUEjgZSfQmraMemLgg8RBqGRykVxxS7MLgsbhmhmW12r5uonLOY8ACCY5aaVceD6YCWgvMSVw4kFJmbyII1sOAFZzDPyVJQ2kREBJmCTEqIATEkc6JMspGZZYUJBJhyxtwSk8a6ZUtHNyL+Exi28U08QBlcQCJuQTl4WtKvWuoN7xoUJCbdD8hXFF4XuLSvCPaTqVEg2MkCJkp9a1e6b/ZoS0ltaUqWqLZshsVZiNEzNzxNSnj0FzlejoZ3gSfuH1/Shm29pM4hh5lwQMt1ExlOoUCRFjBqtmVqSmgO9TQfaU0FSQQcveGaCYSSkEkeWoFJCG+mD1JJbX+v+mRxWFW422koZSrOmHu9mCADITAvciQdCk85rqeFx6A232IJSlITJVJUE92bjW1Z3ZOBcKWwppDSW0ZU2Ga8TBIkTx0k1oWeQmBpPzIv40+R3oeHVhFrb4/D76zG/2PTiMOpoZs0ghIUBJBEZ5B7skG1zlFUt43nWlpDTZKVSTEDnYE8dDeso6AQVqw7hHE5iSIImeINwKMMN7NPJ8GfdK2iWlajgDPketFd1MMFySSCBb4acf1pq9n9mglWFV9nnuVpukGJN5MafOqe7KlF2MxSMvDWb8fAaRVpJ0TTNPh8C4lxRQsakqmZJMXBgiDHHlwqhtXBT2jjpGZOXLI9kBaSQkjiRaetEG1upcJSc86gwLRwP71PSBu3GVPFWcZUoQVJhRTKwJGbgR06daSD2NLoj2m9LaCtMBPZ5TzAUmSfKgG0Xi4taWjCFFJvYKCSYIPKxv0qxtLGqdQlsWSgQOa1cvAUT3e2SHVkKiBBV5GyRHC3uqi9qsTs6TuHj1/VW0rtlkJiAMosLeVbTDOE1n9gbOsLQke/wABWnYQAIGlcE2rOtaQ9Ip9eTXtAzPTQna23GWFZFK+0KcwSNcskTfhIotWV+kTZSHMI88Qe0w7a3GlpspJCSYnikxccfGjFW9inHNrb0LDrzmH+xbccKw2gJgEgCTbjEkaSo1l8Q7mUV8VGTYDvG6oA4TNGA4gNKEDQ/CgHa8OFehGC+DllJvtjlpkVApFWDXihamTEKiRfh5gH41pNzE4ZzPh8QO86U5FaQQFWC/ukzoRBtQAnnUakUZLkqDF07NDvJua9hyVIBda1CkiSkclpHxFvCszl610jdrf0HK3iu6bAOjQ/wA4GniLeFbEYPDr74Q0om4UEpPnNQeaUNSRf0oz3FnMNzN33HHA8pJCEXTI9pXCBqQNZ8K6Ew9l1k8+I/Srj2COov4WNRKaJ1AJ5zB9eNQnkc3Z0QxqKo9ZxM8iOnyrxOAanOnMgzJ7NRRP8wBg1VXhDNhf0PyNJDhBuDPmD6H9aROhnGy260B9xS5N+8AR4AxPrUbTjBMAd78CiUL/AKVXI6i1PaxU9amcQhYhaQociJHv0NOpiPEV8TkjiI4Kv8agVjogCUwL3Nzz1t4VOrBED7Nwgfhc+0T7+8P6o6VRWw4DBw6z1acQU/8AmpJHhFG0wcWjIsoyuggQFC0cx+lETiSnSbcyfhQhrEjs0kkS2u9+Gh/fSiwcRzTfqKpKyUUgbjVOEBSVrBHcICjBSq0xOosfKugbsbPDeRRcWcqIKCSQpSu8VrnVQER586wjYCnUIKwMygRcXAkX9fdW03fxLBU64ld1LKTmIAhHdTlHKOPGtJuqAkrLuPwz2JchCOzbTaSSM3WONaHAbsMhELKlK/FJBBtcR+c15gsY1/qIv/EPnRbD41qP81v+pPzqLnKqRRQXbJ29nNgRkB6mSfU0/wCpN/gTTRtBqP8ANb/qT86jXtFs/wDVbH+5PzqXuHqJmd+sEnswtIgpVBibgzr5/GuX49pbZ7pVlPImxmY9b12TbLKX2lIQ43JiCVDgQaC4LdRsAFxYWr8INvDmfdXViyqMdkZwcno5YMO4ogKKwPE+Ok2pOoDf+XGYcBqORPGunbU3YYAKo7O8qIgT0M6CsDtnDtOqGVMIQe7qDwkk6mrRyckSceILw+8qkuDtEkCI5+JNvD0p+3trDEJShKilMHMQLk3hIHLmaZicIYOUzyCr+83qfZ+77zpA7MpGgVJCQOckfCa3tTs23oo7FwylrSgJzLIH8WWTNuvzrsm6+7AbSC4BP4f/AK5npQ/drA4bBp+zHaO/eWbT0E6Cizm3VzCYTPn7zXLly8tI6MeJrbNYyi1OS+icoUJ5SJ9Kw6se4swpaiCedvTSvcJiezcCgNDJ68x6VzluJvgikpVYTaX0ktpKgy0tUBVzaVAWATrc2uRQfHbXdxAStThU2u/dMJIMkEAdOJ5VRQZI6FjtttNWJKla5UiT8qzG/u9mHGz3E5/tMS2ptKJGYZhlUSOAAJvxtQ7Zz/aDs1+2JyE/eH7/AHY0Swe7DAUtx1tLi3InOArKkAAJTOg1PiTQlKMHspHHz6OHLiIAihSUwog12fejcRlwFWGhlf4QO4vxT93xFcg2rhVtOqQ4kpUNQfyPEda7sGaOTo5c2GUOzyvDVdDhmpzcVRogMW3PjUU1YBqJ1HEVkwkE1s93E49rDoxDADzMqlm5IgkEga3ie7OulY7sjWl3Z24/hh3IU3xQTIJ4wPunqKGRe0aDV9mpwX0gMkhK23EK+9ocp48QT6TWqS4laQpJCkkSCLyK5ni9jN455TuFdQhazK2nJBSeKkkTmB1rf7EwP1dhtrNmKBc6SSSTHSTXJkjFLR1Y5Sb2W1D+x+dRuIBsR4foaet1PEioji0Ae2mOUiplrGKZ538dfWkls/dJ8ONepxrX+okHqZFIYtANnEetv091CjWTIJKdJM+FeOYmY0sI0j1jjXp2iwqy1BJ55h8ajW2ibPtx1NFgSo5fmahYE51TA/dvzrSbsbTwpDCcSnDwEKK1KQAQO2bSlMhtXaL7NC1Xgw7ZQNKlXY42jgvYJ3d+rx9o8ttci/Z9oSmBedBeRFbRWDw6Wz2TylqAGVJbKAbjVU2tNKlSzGiTYFIEFYtxj51odkPMpSrOEHvpIzCTGZNvYNoCuI1NjSpVP5KVZXxXZqdMKhByyQBbujNACUzBngJinpwuH/8A0K/7R+dKlSsNUWkpbSR2ayoXklOWDaLTfj6VOcehHEKV+EH48qVKpseJmtp9tiVd9QSkaJFwPmarM7DaHtZlHqYHupUqPqS6HWOPYQYwjbfsoSNbgD461KF17SpLseqIFIPD3/ComHCZmOdKlQN8lk8DUuUEzGleUqAxlNsYLK6oTEmRS3Qw7hWvDpQSj20G+VMmFIJ0F4I6eFKlVnNqBJRuZ0XZuyktXN1fA8xyPWrjjkUqVec5OW2d0YpaB2KfrlH0ntgrQvjlI9D+te0q6vF1kRPyUnjZjNl4dS1EJEnKfKmpEWNiOFKlXqN7o8ivbYgq8U4ilSoCngFSMuFJkUqVOKXcPhu0WksqDa54kpy9QocK6fs/DupbAecC1DUgZZ+fumlSrmzfo6vH6ZL9ZKELQLBeut/H9ai2LjWW1OdtYKRCVBIVfMCYlKhcTw8xSpVNMrJIFYRtowXJi8xqLCPG8+lNbDQWrNmLf3ctz5ydPnSpURRYp1owGwY45vlTUYVSxKUqI6UqVYKP/9k=',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 4,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://i.ytimg.com/vi/HF03DrMXg0U/maxresdefault.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 5,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f3yGSordUGjVLcQbUU6X6uGW6zuN-aBZM2GVt9d3J8NHASt2',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 6,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'http://www.logicalincrements.com/assets/img/articles/streaming/wagamamatv-dota2.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                }
            ]
        }
    }
    // created() {
    //     this.$store.commit('application/activateModal', 'coming-soon')
    // }
}
</script>

<style lang="scss" scoped>

</style>
