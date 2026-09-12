package com.nicolas.biography;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class BiographyController {

    private final OpenAIService openAIService;

    public BiographyController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/ask")
    public String askQuestion(@RequestBody String question) {
        return openAIService.ask(question);
    }
}