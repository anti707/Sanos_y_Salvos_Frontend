FROM gradle:8.14.3-jdk24 AS builder
WORKDIR /workspace
COPY . .
RUN gradle bootJar --no-daemon
FROM eclipse-temurin:24-jre
WORKDIR /app
# Copiamos solo el artefacto final desde el stage de build
COPY --from=builder /workspace/build/libs/*.jar app.jar
# Usuario no-root ya disponible en la imagen base
USER nobody
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]