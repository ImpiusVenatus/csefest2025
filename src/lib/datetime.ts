export function diffFromNow(target: Date) {
    const now = new Date();
    let delta = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
    const days = Math.floor(delta / 86400); delta -= days * 86400;
    const hours = Math.floor(delta / 3600); delta -= hours * 3600;
    const minutes = Math.floor(delta / 60); delta -= minutes * 60;
    const seconds = delta;
    return { days, hours, minutes, seconds };
}
