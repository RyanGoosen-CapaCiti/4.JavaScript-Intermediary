import os

parent = ""

for i in range(3 , 5): #Creates the week folder inside of the parent folder
    dict = f"Week {i}"
    path = os.path.join(parent, dict)
    os.mkdir(path)
    print(path + " created")
    for j in range(1 , 6): #Creates the day folder inside of the week folder
        dict = f"Day {j}"
        new_parent = path + "/"
        new_path = os.path.join(new_parent + "/", dict)
        os.mkdir(new_path)
        print(path + " created")