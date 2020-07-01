import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCourierAvatarService from '@modules/couriers/services/UpdateCourierAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateCourierAvatarService = container.resolve(
      UpdateCourierAvatarService,
    );

    const courier = await updateCourierAvatarService.execute({
      courier_id: request.params.id,
      avatarFilename: request.file.filename,
    });

    return response.json(courier);
  }
}
