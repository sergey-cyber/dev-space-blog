import { authService } from "../../service/auth/authService";

/**
 * A decorator for checking whether the current user has the required roles.
 * Redirect to login if user is not authenticated
 *
 * @param {string[]} requiredRoles - List of required roles to execute the method.
 * @returns {Function} A decorator that intercepts method calls and checks for roles.
 */

export function access(requiredRoles: string[]) {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const principal = await authService.getPrincipalStricktly();
      if (!requiredRoles.includes(principal.role || "")) {
        throw {
          message: `Недостаточно прав для выполнения операции`,
          status: 403,
        };
      }

      return await originalMethod.apply(this, args);
    };
  };
}
