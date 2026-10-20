import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactCard from './ContactCard';

describe('ContactCard', () => {
    it('debe mostrar los campos y los enlaces del formulario', () => {
        render(<ContactCard />);

        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();

        expect(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('link', { name: 'GitHub' })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('link', { name: 'LinkedIn' })
        ).toBeInTheDocument();
    });

    it('debe mostrar errores al enviar el formulario vacío', async () => {
        render(<ContactCard />);

        fireEvent.click(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        );

        expect(
            await screen.findByText('Ingresa tu nombre.')
        ).toBeInTheDocument();

        expect(
            await screen.findByText('Ingresa tu correo electrónico.')
        ).toBeInTheDocument();

        expect(
            await screen.findByText('Escribe tu mensaje.')
        ).toBeInTheDocument();
    });

    it('debe aceptar datos válidos y mostrar la confirmación', async () => {
        render(<ContactCard />);

        fireEvent.change(screen.getByLabelText('Nombre'), {
            target: { value: 'Juan Perez' },
        });

        fireEvent.change(screen.getByLabelText('Correo electrónico'), {
            target: { value: 'juan@example.com' },
        });

        fireEvent.change(screen.getByLabelText('Mensaje'), {
            target: { value: 'Este es un mensaje de prueba.' },
        });

        fireEvent.click(
            screen.getByRole('button', { name: 'Enviar mensaje' })
        );

        expect(
            await screen.findByText('¡Formulario validado correctamente!')
        ).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByLabelText('Nombre')).toHaveValue('');
            expect(screen.getByLabelText('Correo electrónico')).toHaveValue('');
            expect(screen.getByLabelText('Mensaje')).toHaveValue('');
        });
    });
});