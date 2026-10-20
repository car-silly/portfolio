
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienceSection from './ExperienceSection';

describe('ExperienceSection', () => {
    it('debe mostrar el título de la sección', () => {
        render(<ExperienceSection />);

        expect(
            screen.getByText('Experiencia laboral')
        ).toBeInTheDocument();
    });
});
