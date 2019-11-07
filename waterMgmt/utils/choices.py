import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def countryList():
  COUNTRY_CHOICES = []

  with open(os.path.join(BASE_DIR, 'countries.txt'), 'r') as f:
    for line in f:
      line = line.strip()
      abbrevCountryList = line.split(' ')
      COUNTRY_CHOICES.append((abbrevCountryList[0], abbrevCountryList[1]))

  return tuple(COUNTRY_CHOICES)
