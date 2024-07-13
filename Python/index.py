import random
tekst = 'Hi, welkom bij hhet spel steen papier schaar'
naam = 'hoe heet je?'

print(tekst, '\n', naam)
gegevenNaam = input()
groetMetNaam = 'Hi,\n '+ gegevenNaam+ '\t welkom!'

print(groetMetNaam)
uitlegSpel = 'je kunt alleen tussen steen papier en schaar kiezen (LET OP DE SPELLING)'
print(uitlegSpel)
tegenStander = 'Je tegen stander is de computer'
print(tegenStander)
start = 'Begin maar met het spel (veel succes)'
print(start)

keuzeSpeler = input('Wat is jouw keuze (steen, papier of schaar)? ').lower()
print('Je hebt ' + keuzeSpeler + ' gekozen')
computer = ['steen', 'papier', 'schaar']
computerKeuze = random.choice(computer)
#bij gelijk spel
if keuzeSpeler == computerKeuze:
    print('Gelijkspel')

# als speler steen heeft

elif keuzeSpeler == 'steen' and computerKeuze == 'papier':
    print('Computer gewonnen')
elif keuzeSpeler == 'steen' and computerKeuze == 'schaar':
    print('Jij hebt gewonnen')

#als speler papier heeft

elif keuzeSpeler == 'papier' and computerKeuze == 'steen':
    print('Jij hebt gewonnen')
elif keuzeSpeler == 'papier' and computerKeuze == 'schaar':
    print('Computer gewonnen')

#als speler schaar heeft

elif keuzeSpeler =='schaar' and computerKeuze == 'steen':
    print('Computer gewonnen')
elif keuzeSpeler =='schaar' and computerKeuze == 'papier':
    print('Jij hebt gewonnen')
else :
    print('ERROR: geen geldige invoer')