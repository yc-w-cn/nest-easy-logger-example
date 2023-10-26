import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultContentFormatter, EasyLogger } from '@yc-w-cn/nest-easy-logger';

@Controller()
export class AppController {
  private logger = new EasyLogger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  basicUse(): string {
    // Output Key
    this.logger.log('hi');

    // Output Key + Value
    this.logger.log('hi', 'hello world');

    // Output Key + Object
    this.logger.log('hi', { text: 'hello world' });

    return this.appService.getHello();
  }

  @Get('custom')
  customUse(): string {
    const customLogger = new EasyLogger(AppController.name);
    customLogger.setContentFormatter(
      new DefaultContentFormatter({
        relaceEmptyValue: true,
      }),
    );

    // Output Replace Empty Value
    customLogger.log('', '');

    return this.appService.getHello();
  }
}
