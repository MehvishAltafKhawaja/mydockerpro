def get_data():
    with open('name.txt') as f:
        name = f.read()

        name= name.split()

        return name