class Ucenik:
    def __init__(self, ime, prezime, rezultat):
        self.ime = ime
        self.prezime = prezime
        self.rezultat = rezultat

# Importirani rezultati učenika
rezultati_ucenika = [
    ("Marko", "Marković", 95),
    ("Ivana", "Ivanović", 85),
    ("Petar", "Petrić", 75),
    ("Ana", "Anić", 60),
    ("Matej", "Matejić", 55),
    ("Jelena", "Jelenić", 50),
    ("Luka", "Lukić", 45),
    ("Nikolina", "Nikolić", 40),
    ("Ante", "Antić", 35),
    ("Marina", "Marinić", 25)
]

# Sortiranje učenika prema rezultatima
sortirani_ucenici = sorted([Ucenik(ime, prezime, rezultat) for ime, prezime, rezultat in rezultati_ucenika], key=lambda x: x.rezultat, reverse=True)

# Kreiranje divizija
divizija1 = sortirani_ucenici[:10]  # Prvih 10 učenika
divizija2 = sortirani_ucenici[10:20]  # Sljedećih 10 učenika
divizija3 = sortirani_ucenici[20:]  # Preostalih učenika

# Ispis rezultata
print("Divizija 1 (najbolji rezultati):")
for ucenik in divizija1:
    print(ucenik.ime, ucenik.prezime, "-", ucenik.rezultat)

print("\nDivizija 2 (srednji rezultati):")
for ucenik in divizija2:
    print(ucenik.ime, ucenik.prezime, "-", ucenik.rezultat)

print("\nDivizija 3 (slabi rezultati):")
for ucenik in divizija3:
    print(ucenik.ime, ucenik.prezime, "-", ucenik.rezultat)
