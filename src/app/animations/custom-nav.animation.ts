import { createAnimation } from '@ionic/core';

export const customNavAnimation = (_baseEl: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .beforeRemoveClass('ion-page-invisible')
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateX(20px)', 'translateX(0)')
    .duration(220)
    .easing('cubic-bezier(0.2, 0, 0, 1)');

  const rootAnimation = createAnimation().addAnimation([enteringAnimation]);

  if (leavingEl) {
    const leavingAnimation = createAnimation()
      .addElement(leavingEl)
      .fromTo('opacity', '1', '0.85')
      .fromTo('transform', 'translateX(0)', 'translateX(-10px)')
      .duration(220)
      .easing('cubic-bezier(0.2, 0, 0, 1)');

    rootAnimation.addAnimation([leavingAnimation]);
  }

  return rootAnimation;
};
