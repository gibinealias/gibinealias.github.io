uniform float material_refraction, material_refractionIndex;
uniform mat4 matrix_viewProjection;
uniform sampler2D texture_screen;

vec3 refract2(vec3 viewVec, vec3 Normal, float IOR) {
    float vn = dot(viewVec, Normal);
    float k = 1.0 - IOR * IOR * (1.0 - vn * vn);
    vec3 refrVec = IOR * viewVec - (IOR * vn + sqrt(k)) * Normal;
    return refrVec;
}

void addRefraction() {
    vec3 reflectionDir = refract2(-dViewDirW, dNormalW, material_refractionIndex);
    reflectionDir = (matrix_viewProjection * vec4(reflectionDir, 0.0)).xyz;
    
    vec4 positionS = matrix_viewProjection * vec4(vPositionW, 1.0);
    vec2 screenUV = (positionS.xy / positionS.w) * 0.5 + 0.5;
    vec2 offset = reflectionDir.xy * 0.5 * (1.0 - material_refractionIndex);
    
    float dist = 1.0 - min(length(view_position - vPositionW) / 20.0, 1.0);
    vec4 refraction = gammaCorrectInput(texture2D(texture_screen, screenUV + offset * dist));
    
    dDiffuseLight = mix(dDiffuseLight, refraction.rgb * dAlbedo, material_refraction);
}