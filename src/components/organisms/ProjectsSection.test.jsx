
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from './ProjectsSection';

describe('ProjectsSection', () => {
    it('debe mostrar los proyectos disponibles', () => {
        render(<ProjectsSection />);

        expect(
            screen.getByText('Proyectos destacados')
        ).toBeInTheDocument();

        expect(screen.getByText('OptiBeans')).toBeInTheDocument();
        expect(screen.getByText('Gourmet Hub')).toBeInTheDocument();

        expect(
            screen.getByText('Sistema de gestión para una óptica.')
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                'Aplicación web de gastronomía con catálogo de productos y talleres.'
            )
        ).toBeInTheDocument();
    });
});
