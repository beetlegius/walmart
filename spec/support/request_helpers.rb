module Request
  module JsonHelpers
    def json
      @json_response ||= JSON.parse(response.body, symbolize_names: true)
    end
  end

  module AuthHelpers
    def auth_headers(user)
      base_headers = { 'Accept': 'application/json' }
      if user.present?
        token = Knock::AuthToken.new(payload: { sub: user.id }).token
        base_headers.merge 'Authorization': "Bearer #{token}"
      else
        base_headers
      end
    end

    shared_examples 'a protected resource' do
      it { expect(response).to have_http_status(:unauthorized) }
      it { expect(response.body).to be_empty }
    end

    shared_examples 'a not found resource' do
      it { expect(response).to have_http_status(:not_found) }
      it { expect(json[:error]).not_to be_empty }
    end

    shared_examples 'a paranoid resource' do
      it { expect(resource.id).to be_present }
      it { expect(resource.deleted_at).to be_present }
    end
  end
end
