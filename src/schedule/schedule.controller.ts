import { Request, Response } from "express";

export class ScheduleController {
  public async finish(request: Request, response: Response) {
    return response.json({
        message: 'Agendamento Realizado com sucesso'
    })
  }
}
