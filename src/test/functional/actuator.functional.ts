import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '@main/app.module';
import * as sinon from 'sinon';
// import * as TypeMoq from 'typemoq';
import { SomeDependency } from '@main/provider/some-dependency';
import { SinonStubbedInstance } from 'sinon';
// import {instance, mock, when} from 'ts-mockito';

describe('Actuator', (): void => {
    let app: INestApplication;
    //Sinon
    let mockedSomeDependency: SinonStubbedInstance<SomeDependency>;

    //Typemoq
    // let mockedSomeDependency: TypeMoq.IMock<SomeDependency>;

    //Ts-Mockito
    // let mockedSomeDependency: SomeDependency;
    // let instanceSomeDependency: SomeDependency;

    beforeAll(
        async (): Promise<void> => {
            //Sinon
            mockedSomeDependency = sinon.createStubInstance(SomeDependency);
            mockedSomeDependency.getHelloWorld.returns(Promise.resolve('hello nestjs'));

            //Typemoq
            // mockedSomeDependency = TypeMoq.Mock.ofType<SomeDependency>();
            // mockedSomeDependency.setup((someDependency): Promise<string> => someDependency.getHelloWorld()).returns(async () => 'hello nestjs');

            //Ts-Mockito
            // mockedSomeDependency = mock(SomeDependency);
            // when(mockedSomeDependency.getHelloWorld()).thenReturn(Promise.resolve('hello nestjs'));
            // instanceSomeDependency = instance(mockedSomeDependency);

            const module = await Test.createTestingModule({
                imports: [AppModule]
            })
                //Sinon
                .overrideProvider('dependency')
                .useValue(mockedSomeDependency)

                //Typemoq
                //     .overrideProvider('dependency')
                //     .useValue(mockedSomeDependency.object)

                //Ts-Mockito
                //     .overrideProvider('dependency')
                //     .useValue(instanceSomeDependency)
                .compile();

            app = module.createNestApplication();
            await app.init();
        }
    );

    afterAll(
        async (): Promise<void> => {
            await app.close();
        }
    );

    it('should return hello nestjs instead of hello world', async (): Promise<Test> => {
        return await request
            .agent(app.getHttpServer())
            .get('/api/v1/test/greet')
            .expect(200)
            .expect('hello nestjs');
    });
});
