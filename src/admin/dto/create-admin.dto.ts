import { ApiProperty } from "@nestjs/swagger"

export class CreateAdminDto {
    @ApiProperty()
    email: string

    @ApiProperty()
    name: string
}
