# Task

--> clean routes: en las rutas(verbos) dejar la ruta y funcion.
La responsabilidad try catch pasarlo a controllers.

-->

const findByName = (pk) => getAllUser().find((item) => item.name == pk);
const findById = (pk) => getAllUser().find((item) => item.id == pk);
const findByIndex = (pk) => getAllUser().findIndex((item) => item.id == pk);
