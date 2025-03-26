def ingresar_persona():
    nombre = input("Ingrese el nombre: ")
    apellido = input("Ingrese el apellido: ")
    dni = input("Ingrese el DNI: ")
    telefonos = input("Ingrese los télefonos separados por coma:").split(", ")
    hijos = input("Ingrese los nombres de los hijos separados por coma:").split(", ")

    personas.append([nombre, apellido, dni, telefonos, hijos])

def mostrar_datos():
    print("\nDatos de personas:")
    for persona in personas:
        print(f"Nombre: {persona[0]} {persona[1]}, DNI: {persona[2]}")
        print(f"Telefonos: {', '.join(persona[3])}")
        print(f"Hijos: {', '.join(persona[4])}")
        print(f"Cantidad de hijos: {len(persona[4])}, Cantidad de telefonos: {len(persona[3])}\n")

def filtrar_dni():
    dni = input("Ingrese el DNI de la persona que quiera encontrar:")
    persona_encontrada = next((persona for persona in personas if persona[2] == dni), None)
    if persona_encontrada:
        print(f"Nombre: {persona_encontrada[0]} {persona_encontrada[1]}, DNI: {persona_encontrada[2]}")
        print(f"Telefonos: {', '.join(persona_encontrada[3])}")
        print(f"Hijos: {', '.join(persona_encontrada[4])}")
        print(f"Cantidad de hijos: {len(persona_encontrada[4])}, Cantidad de telefonos: {len(persona_encontrada[3])}\n")
    else:
        print("Persona no encontrada")

def mostrar_menu():
    while True:
        print("\nMenu:")
        print("1.Ingrese nueva persona")
        print("2.Mostrar todos los datos")
        print("3.Filtrar por DNI")
        print("4.Salir")
        opcion = input("Ingrese la opcion: ")

        if opcion == "1":
            ingresar_persona()
        elif opcion == "2":
            mostrar_datos()
        elif opcion == "3":
            filtrar_dni()
        elif opcion == "4":
            print("Programa finalizado")
            break
        else:
            print("Opcion no valida")

personas = []
mostrar_menu()