import { dataSource } from "src/ormconfig";
import { Repository } from "typeorm";
import { Country } from "../entities/country.entity";

export const customCountryRepository : Repository<Country> = dataSource.getRepository(Country).extend(
    {
        async findAllCountries() : Promise<Country[]>{
            return this.createQueryBuilder('c')
            .select()
            .leftJoinAndSelect()
        }
    }
);