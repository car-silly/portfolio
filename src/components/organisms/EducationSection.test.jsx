
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EducationSection from './EducationSection';

describe('EducationSection', () => {
    it('debe mostrar la información de los estudios', () => {
        render(<EducationSection />);

        expect(screen.getByText('Estudios')).toBeInTheDocument();
        expect(screen.getByText('Duoc Uc')).toBeInTheDocument();
        expect(screen.getByText('Analista Programador')).toBeInTheDocument();
    });
});
