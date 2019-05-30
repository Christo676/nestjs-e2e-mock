import { Module } from '@nestjs/common';
import { SomeController } from '@api/controller/some.controller';
import { SomeDependencyProvider } from '@main/provider/some-dependency.provider';

@Module({
    imports: [],
    exports: [],
    providers: [SomeDependencyProvider],
    controllers: [SomeController]
})
export class AppModule {
    public constructor() {}
}
