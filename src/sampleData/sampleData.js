export var empresasFull = [
   { nombre: "Toesca", rut: "76.123.456-7" },
   { nombre: "Coca Cola", rut: "76.123.456-7" },
   { nombre: "Pepsi", rut: "76.123.456-7" },
];

export var usuariosFull = [
   { nombre: "Juan", rut: "76.123.456-7" },
   { nombre: "Pedro", rut: "26.123.456-k" },
   { nombre: "Pablo", rut: "19.123.346-1" },
];

export var perfilesFull = [
   { nombre: "Administrador", cargo: "Gerente Administrativo" },
   { nombre: "Ingeniero", cargo: "Gerente de Obras" },
   { nombre: "Abogado", cargo: "Gerente Legal" },
];

export var empresas = {
   data: [
      {
         id: 1,
         attributes: {
            nombre: "Culvers",
            rut: "76.234.123-k",
            createdAt: "2022-12-02T20:09:15.042Z",
            updatedAt: "2022-12-03T15:10:47.340Z",
            perfil: {
               data: null,
            },
         },
      },
      {
         id: 2,
         attributes: {
            nombre: "Epica",
            rut: "76.123.123-7",
            createdAt: "2022-12-02T20:11:08.072Z",
            updatedAt: "2022-12-03T15:11:56.306Z",
            perfil: {
               data: {
                  id: 2,
                  attributes: {
                     cargo: "full stack engineer",
                     createdAt: "2022-12-02T20:16:15.389Z",
                     updatedAt: "2022-12-05T14:37:06.987Z",
                     nombre: "Gerente de Sistemas",
                  },
               },
            },
         },
      },
      {
         id: 4,
         attributes: {
            nombre: "Toesta",
            rut: "75.123.456-k",
            createdAt: "2022-12-03T15:02:26.064Z",
            updatedAt: "2022-12-03T15:02:26.064Z",
            perfil: {
               data: {
                  id: 8,
                  attributes: {
                     cargo: "full stack",
                     createdAt: "2022-12-03T15:03:00.041Z",
                     updatedAt: "2022-12-05T14:36:51.725Z",
                     nombre: "Gerente de Sistemas",
                  },
               },
            },
         },
      },
   ],
   meta: {
      pagination: {
         page: 1,
         pageSize: 25,
         pageCount: 1,
         total: 3,
      },
   },
};

export var perfiles = {
   data: [
      {
         id: 1,
         attributes: {
            cargo: "full stack",
            createdAt: "2022-12-02T20:10:27.129Z",
            updatedAt: "2022-12-05T16:31:02.610Z",
            nombre: "Gerente de Sistemas",
            empresa: {
               data: null,
            },
            usuario: {
               data: null,
            },
         },
      },
      {
         id: 2,
         attributes: {
            cargo: "full stack engineer",
            createdAt: "2022-12-02T20:16:15.389Z",
            updatedAt: "2022-12-05T14:37:06.987Z",
            nombre: "Gerente de Sistemas",
            empresa: {
               data: {
                  id: 2,
                  attributes: {
                     nombre: "Epica",
                     rut: "76.123.123-7",
                     createdAt: "2022-12-02T20:11:08.072Z",
                     updatedAt: "2022-12-03T15:11:56.306Z",
                  },
               },
            },
            usuario: {
               data: {
                  id: 1,
                  attributes: {
                     nombre: "Rafael Soteldo",
                     rut: "26.144.985-4",
                     createdAt: "2022-12-02T20:09:39.193Z",
                     updatedAt: "2022-12-05T16:31:39.775Z",
                  },
               },
            },
         },
      },
      {
         id: 8,
         attributes: {
            cargo: "full stack",
            createdAt: "2022-12-03T15:03:00.041Z",
            updatedAt: "2022-12-05T14:36:51.725Z",
            nombre: "Gerente de Sistemas",
            empresa: {
               data: {
                  id: 4,
                  attributes: {
                     nombre: "Toesta",
                     rut: "75.123.456-k",
                     createdAt: "2022-12-03T15:02:26.064Z",
                     updatedAt: "2022-12-03T15:02:26.064Z",
                  },
               },
            },
            usuario: {
               data: {
                  id: 1,
                  attributes: {
                     nombre: "Rafael Soteldo",
                     rut: "26.144.985-4",
                     createdAt: "2022-12-02T20:09:39.193Z",
                     updatedAt: "2022-12-05T16:31:39.775Z",
                  },
               },
            },
         },
      },
   ],
   meta: {
      pagination: {
         page: 1,
         pageSize: 25,
         pageCount: 1,
         total: 3,
      },
   },
};

export var usuarios = {
   data: [
      {
         id: 1,
         attributes: {
            nombre: "Rafael Soteldo",
            rut: "26.144.985-4",
            createdAt: "2022-12-02T20:09:39.193Z",
            updatedAt: "2022-12-05T16:31:39.775Z",
            perfil: {
               data: [
                  {
                     id: 8,
                     attributes: {
                        cargo: "full stack",
                        createdAt: "2022-12-03T15:03:00.041Z",
                        updatedAt: "2022-12-05T14:36:51.725Z",
                        nombre: "Gerente de Sistemas",
                     },
                  },
                  {
                     id: 2,
                     attributes: {
                        cargo: "full stack engineer",
                        createdAt: "2022-12-02T20:16:15.389Z",
                        updatedAt: "2022-12-05T14:37:06.987Z",
                        nombre: "Gerente de Sistemas",
                     },
                  },
               ],
            },
         },
      },
      {
         id: 2,
         attributes: {
            nombre: "Elsy Noguera",
            rut: "26.445.363-1",
            createdAt: "2022-12-02T20:11:57.580Z",
            updatedAt: "2022-12-03T18:22:21.908Z",
            perfil: {
               data: [],
            },
         },
      },
      {
         id: 4,
         attributes: {
            nombre: "Esteban Pérez",
            rut: "26.234.456-6",
            createdAt: "2022-12-03T14:54:11.930Z",
            updatedAt: "2022-12-03T20:14:53.407Z",
            perfil: {
               data: [],
            },
         },
      },
   ],
   meta: {
      pagination: {
         page: 1,
         pageSize: 25,
         pageCount: 1,
         total: 3,
      },
   },
};
