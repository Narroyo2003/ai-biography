package com.nicolas.biography;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OpenAIService {

    private final String apiKey = System.getenv("OPENAI_API_KEY");

    private final String biography = """
        Nicolas is a Computer Science student at Rutgers University.
        He is interested in software engineering, cloud engineering,
        cars, and building full-stack applications.
        """;

    public String ask(String question) {

        RestTemplate restTemplate = new RestTemplate();

        String url = "https://api.openai.com/v1/chat/completions";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        Map<String, Object> body = Map.of(
                "model", "gpt-4o-mini",
                "messages", List.of(
                        Map.of(
                                "role", "system",
                                "content", "Answer questions using only this biography:\n" + biography
                        ),
                        Map.of(
                                "role", "user",
                                "content", question
                        )
                )
        );

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(body, headers);

        Map response = restTemplate.postForObject(url, request, Map.class);

        List choices = (List) response.get("choices");
        Map firstChoice = (Map) choices.get(0);
        Map message = (Map) firstChoice.get("message");

        return (String) message.get("content");
    }
}