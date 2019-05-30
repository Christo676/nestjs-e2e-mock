export class SomeDependency {
    public constructor() {}

    public async getHelloWorld(): Promise<string> {
        return 'hello world';
    }
}
