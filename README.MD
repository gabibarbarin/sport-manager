++ Prueba tecnica Cloud District ++

## Instrucciones:

    -Instalación: npm install
    -Iniciar el servidor: npm run dev
    -Iniciar los test: npm run test

## Modulo para envio de correos electronicos (Nodemailer + mailtrap):

    -HOST_EMAIL = smtp.mailtrap.io
    -PORT_EMAIL = 2525
    -USER_EMAIL = Su usario proporcionado por mailtrap
    -PASS_EMAIL = Su clave proporcionada por mailtrap

## Detalles de la prueba tecnica:

Se desea realizar una mini-aplicación Symfony API Rest que gestione clubes, jugadores y entrenadores.

Descripción:
Sobre estos modelos (clubes, jugadores y entrenadores) se deberán de poder realizar las
siguientes operaciones:

Clubes

    - Dar de alta un club.
    - Dar de alta un jugador en el club.
    - Dar de alta un entrenador en el club.
    - Modificar el presupuesto de un club.
    - Dar de baja un jugador del club.
    - Dar de baja un entrenador del club.
    - Listar jugadores de un club con posibilidad de filtrar por una de las propiedades (por ejemplo nombre) y con paginación

Jugadores

    - Dar de alta un jugador sin pertenecer a un club

Entrenadores

    - Dar de alta un entrenador sin pertenecer a un club.

- Cada club deberá de tener un presupuesto, este presupuesto se asignará en el alta del club.
- Al dar de alta un jugador/entrenador a un club se deberá especificar el salario del jugador/entrenador para ese club, ese salario debe de salir del presupuesto del club y el presupuesto nunca puede ser menor que cero.
- Al modificar el presupuesto de un club se tiene que tener en cuenta los salarios actuales de ese club.
- Un jugador/entrenador no podrá estar dado de alta en más de un club.
- Cada vez que se de alta o baja a un jugador/entrenador tendrá que ser notificado por email(en un futuro se está pensando en pueda ser notificado por otras vías (sms, whatsapp, ...) por lo tanto lo tendremos que dejar abierta esta posibilidad sin ser implementada actualmente).
