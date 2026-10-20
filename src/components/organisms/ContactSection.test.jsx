
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
    it('debe mostrar la sección de contacto', () => {
        render(<ContactSection />);

        expect(screen.getByText('Contacto')).toBeInTheDocument();
    });
});
