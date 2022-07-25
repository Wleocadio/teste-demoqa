import { faker } from '@faker-js/faker'

export default {


        dados: function () {
            
            var data = {

                nome: faker.name.firstName(),
                sobrenome: faker.name.findName(),
                idade: faker.datatype.number({max: 100}),
                telefone: '1199090909',
                nascimento: '28 01 2001',//faker.date.birthdate(),
                email: faker.internet.email(),
                endereco_atual: faker.address.streetAddress(),
                endereco_per: faker.address.streetAddress(),
                salario: faker.datatype.number({min: 2000}),
                departamento: faker.company.bsAdjective(),
                assuntos: faker.company.bsAdjective()
            }

            return data
        }

}