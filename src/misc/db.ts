import mongoose, {Connection} from 'mongoose';

export interface IDatabase {
    init(): Promise<void>;
}

export default class Database implements IDatabase {
    private readonly mongoURI: string | undefined;

    constructor(mongoURI: string | undefined) {
        this.mongoURI = mongoURI;
    }

    async init(): Promise<void> {
        if (this.mongoURI != null) {
            await mongoose.connect(this.mongoURI)
                .then(() => console.log('Database connected'))
                .catch(err => console.log(err));
        }

        mongoose.connection.on('error', err => console.log(err));
    }
}