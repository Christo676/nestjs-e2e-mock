import { FactoryProvider } from '@nestjs/common/interfaces';
import { SomeDependency } from '@main/provider/some-dependency';

export const SomeDependencyProvider: FactoryProvider = {
    provide: 'dependency',
    inject: [],
    useFactory: (): SomeDependency => {
        return new SomeDependency();
    }
};
