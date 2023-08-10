export interface EmployeeCreationRequestDto {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  gender: string | null | undefined;
  fatherName?: string;
  motherName?: string;
  spouseName?: string;
  isMarried?: boolean;
  birthDate?: Date;
  anniversaryDate?: Date;
}

export interface EmployeeCreationRequest {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  gender: string | null | undefined;
  fatherName?: string;
  motherName?: string;
  spouseName?: string;
  isMarried?: boolean;
  birthDate?: Date;
  anniversaryDate?: Date;
}
