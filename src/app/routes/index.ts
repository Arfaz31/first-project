import { Router } from 'express';
import { userRouter } from '../modules/User/user.route';
import { StudentRoutes } from '../modules/student/student.router';
import { academicSemisterRoutes } from '../modules/academicSemister/academicSemister.route';
import { academicFacultyRoutes } from '../modules/AcademicFaculty/AcademicFaculty.route';
import { academicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.route';
import { FacultyRoutes } from '../modules/Faculty/faculty.route';
import { AdminRoutes } from '../modules/Admin/admin.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },

  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/academic-semisters',
    route: academicSemisterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
