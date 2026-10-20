
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PersonalSection from './PersonalSection';

describe('PersonalSection', () => {
    it('debe mostrar el título Sobre Mi', () => {
        render(<PersonalSection />);

        expect(screen.getByText('Sobre Mi')).toBeInTheDocument();
    });
});
