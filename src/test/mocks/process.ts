// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { injectable } from 'inversify';
import * as TypeMoq from 'typemoq';
import { ICurrentProcess } from '../../client/common/types';
import { EnvironmentVariables } from '../../client/common/variables/types';

@injectable()
export class MockProcess implements ICurrentProcess {
    constructor(public env: EnvironmentVariables = { ...process.env }) { }
    public on(event: string | symbol, listener: Function): this {
        return this;
    }
    public get argv(): string[] {
        return [];
    }
    public get stdout(): NodeJS.WriteStream {
        return TypeMoq.Mock.ofType<NodeJS.WriteStream>().object;
    }
    public get stdin(): NodeJS.ReadStream {
        return TypeMoq.Mock.ofType<NodeJS.ReadStream>().object;
    }
}
