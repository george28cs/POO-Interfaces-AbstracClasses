# Clases e interfaces  
En este ejemplo, se crea la clase e interface persona.  
En la interface persona, se definen los métodos y propiedades que debe ser requeridas para generar una instancia de la interface Persona.  
Por defecto, las propiedades y métodos de las interfaces no pueden contener valores, únicamente definen cual será la estructura de la instancia y dicha estructura es forzoza.
Para cada instancia creada es necesario definir los valores de las propiedades y métodos.  

En cambio en las interfaces (si se define por defecto el valor de una propiedad) no es necesario ingresar todos los parámetros en el constructor. Además los métodos definidos en la clase abstracta puedem ser heredados sin necesidad de reescribirlos en la clase hijo.  

## Ventajas y desventajas
Ventajas de usar interfaces: Cuando se requiere utilizar y respetar la creación de instancias con una estructura definida se pueden utilizar interfaces.
Desventajas: Si se utiliza para definir métodos, será necesario reescribir los métodos en cada instancia.

Ventajas de las clases: Los métodos y propiedades se pueden predefinir y heredar. Cuando se requiera escribir una aplicación grande, puede reducir la cantidad de líneas a escribir si los métodos y propiedades se reutilizan.

Desventajas: Si se crea un parámetro por defecto, puede que al crear una instancia omitamos algun valor y aún así se construye la instancia... lo que pudiera generar un objeto con propiedades diferentes a las que queremos definir. 
