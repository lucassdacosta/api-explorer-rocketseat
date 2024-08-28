import { AppError } from "../utils/AppError.js"

export class UsersController{ 
  create(request, response){
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("Nome é obrigatório");
    }

    if(!email){
      throw new AppError("Email é obrigatório");
    }

    response.status(201).json({ name, email, password });
  }
}

