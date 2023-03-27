import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

export const productGuard = (next: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const id = Number(next.paramMap.get('id'));
  if (isNaN(id) || id < 1) {
    alert('Invalid product id');
    router.navigate(['/products']);
    return false;
  }

  return true;
};
