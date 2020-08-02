import { INestApplication, InternalServerErrorException } from '@nestjs/common';

// type StaticServices = typeof GeneralEventPublisher;

export class StaticModuleResolver {
  private static application: INestApplication;

  public static setup(app: INestApplication) {
    StaticModuleResolver.application = app;
  }

  public static resolve<T>(service: any): T {
    if (!StaticModuleResolver.application)
      throw new InternalServerErrorException(
        'Setup the static module resolver before using it',
      );

    return StaticModuleResolver.application.get(service as any) as T;
  }
}
