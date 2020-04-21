import csv

def parse():
    dict = {}
    with open('data/covid.csv', 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            if (row[0][0] != 'D'): # not the first row
                # date: <string>, values: <array> [new cases, hospitalized, deaths]
                #print(row)
                #print('DONE')
                #print(type(row[0]))
                dict[row[0]] = [int(row[1]), int(row[2]), int(row[3])]
        #print(dict)
    return dict
