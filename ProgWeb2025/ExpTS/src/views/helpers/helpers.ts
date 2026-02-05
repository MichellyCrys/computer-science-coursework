import { Technology } from './helpersTypes';

export function listNodejsTechs(technologies: Technology[]): string {
    const nodejsTechs = technologies.filter(tech => tech.poweredByNodejs);
    if (nodejsTechs.length === 0) {
        return '<p>Nenhuma tecnologia baseada em Node.js encontrada.</p>';
    }
    const listItems = nodejsTechs.map(tech => `<li>${tech.name} - ${tech.type}</li>`).join('');
    return `<ul>${listItems}</ul>`;
}