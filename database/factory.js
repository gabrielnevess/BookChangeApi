'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Hash = use('Hash');

Factory.blueprint('App/Models/Usuario', async (faker) => {
  return {
    va_nome: faker.username(),
    dt_data_nascimento: '1994-09-10',
    va_celular: '' + (Math.floor(Math.random() * 9000000000) + 1000000000),
    va_telefone: '',
    va_email: faker.email(),
    va_password: await Hash.make(faker.password()),
    en_genero: (Math.floor(Math.random() * 2) + 1) == 1 ? "masculino" : "feminino",
    va_cpf: '',
  }
})
