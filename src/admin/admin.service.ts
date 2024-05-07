import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly AdminRepository: Repository<AdminEntity>
  ){}

  async create(createAdminDto: CreateAdminDto) {
    return await this.AdminRepository.save(createAdminDto);
  }

 async findAll() {
    return await this.AdminRepository.find();
  }

  async findOne(id: number) {
    return await this.AdminRepository.findOneBy({id: id})
  }

  async update(id: number, updateUserDto: UpdateAdminDto) {
    return await this.AdminRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.AdminRepository.delete(id)
  }
}
