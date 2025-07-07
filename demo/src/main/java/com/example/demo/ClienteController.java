package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "http://localhost:3000") // Permite chamadas do front-end
public class ClienteController {

    private final List<Cliente> clientes = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public ClienteController() {
        clientes.add(new Cliente(counter.incrementAndGet(), "Ana Silva", "ana.silva@email.com"));
    }

    @GetMapping("/{id}")
    public Cliente getClienteById(@PathVariable Long id) {
        return clientes.stream().filter(c -> c.getId().equals(id)).findFirst().orElse(null);
    }

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        cliente.setId(counter.incrementAndGet());
        clientes.add(cliente);
        return cliente;
    }

    @PutMapping("/{id}")
    public Cliente updateCliente(@PathVariable Long id, @RequestBody Cliente clienteAtualizado) {
        Cliente cliente = getClienteById(id);
        if (cliente != null) {
            cliente.setNome(clienteAtualizado.getNome());
            cliente.setEmail(clienteAtualizado.getEmail());
        }
        return cliente;
    }

    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable Long id) {
        clientes.removeIf(c -> c.getId().equals(id));
    }
}