import { Controller, Get, Inject } from '@nestjs/common';
import { SomeDependency } from '@main/provider/some-dependency';

@Controller('/api/v1/test')
export class SomeController {
    private readonly someDependency: SomeDependency;

    public constructor(@Inject('dependency') someDependency: SomeDependency) {
        this.someDependency = someDependency;
    }

    @Get('/greet')
    public async ping(): Promise<string> {
        return await this.someDependency.getHelloWorld();
    }
}
