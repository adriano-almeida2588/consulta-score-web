import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
    public async register ({ view }:HttpContextContract) {
      return view.render('register')
		}

		public async login ({ view }: HttpContextContract) {
			return view.render('login')
		}
		
		public async signIn ({ request, auth, response }: HttpContextContract) {
			const email = request.input('email')
			const password = request.input('password')
			await auth.attempt(email, password)
	
			response.redirect('layouts/master')
		}

    public async store ({ request, auth, response, session } : HttpContextContract) {
			const validationSchema = schema.create({
				email: schema.string({ trim: true }, [
					rules.email(),
					rules.unique({ table: 'users', column: 'email' }),
				]),
				password: schema.string({ trim: true }, [
					rules.confirmed(),
				]),
			})
	
			const userDetails = await request.validate({
				schema: validationSchema,
			})
			
			const user = new User()
			user.email = userDetails.email
			user.password = userDetails.password
			
			await user.save()

			await auth.login(user)
	
			session.flash('success', 'Conta criada com sucesso')

    	return response.redirect('/consultas/listagem-recentes')
	}
}
