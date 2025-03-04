import os
import platform

class node:
    def __init__(self, path, node_modules):
        self.path = path
        self.node_modules = node_modules

    def execute(self, path, node_modules):
        try:
            os.system('clear')
            print('installing node modules')
            os.system(f'npm install {self.node_modules}')
        except Exception as e:
            os.system('clear')
            print(f'oxy network has caught an error: {e}')
            input("press any key to continue...")
        os.system(f'node {self.path}')

class python:
    def __init__(self, path, py_modules):
        self.path = path
        self.py_modules = py_modules
    
    def execute(self, path, py_modules):
        try:
            os.system('clear')
            print('installing python modules')
            if platform.platform() == "windows":
                os.system('clear')
                os.system(f'pip install {self.py_modules}')
            elif platform.platform() == "nt":
                os.system('clear')
                os.system(f'pip3 install {self.py_modules}')
            else:
                os.system('clear')
                print('it seems we couldnt detect your os?! executing all commands')
                os.system(f'pip install {self.py_modules}')
                os.system(f'pip3 install {self.py_modules}')
                os.system(f'python pip install {self.py_modules}')
        except Exception as e:
            print(f'none of these options have worked. \n ERROR: {e}')
                
